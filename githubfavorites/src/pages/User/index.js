import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ActivityIndicator, Text } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    loading: false,
    page: 1,
    refreshing: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  refreshList = () => {};

  loadMore = async () => {
    this.setState({ loading: true });

    const { page } = this.state;
    const nextPage = page + 1;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(
      `/users/${user.login}/starred?page=${nextPage}`
    );

    this.setState({
      stars: response.data,
      page: nextPage,
      loading: false,
    });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing, page } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Text>Página: {page}</Text>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
          onEndReached={this.loadMore} // Função que carrega mais itens
          onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
          refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
          // Restante das props
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />

        {loading && <ActivityIndicator color="#666" />}
      </Container>
    );
  }
}

User.propTypes = {
  navigation: propTypes.shape({
    getParam: propTypes.func,
  }).isRequired,
};
