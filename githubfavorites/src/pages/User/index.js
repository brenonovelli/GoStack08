import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
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
    loading: true,
    page: 1,
    refreshing: false,
    lastPage: false,
  };

  async componentDidMount() {
    this.load();
  }

  handleNavigate = repository => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { repository });
  };

  refreshList = async () => {
    this.setState({ refreshing: true }, this.load);
  };

  load = async (page = 1) => {
    const { stars } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page },
    });

    const lengthReponse = Object.keys(response.data).length;

    this.setState({
      stars: page >= 2 ? [...stars, ...response.data] : response.data,
      page,
      loading: false,
      refreshing: false,
      lastPage: lengthReponse === 0,
    });
  };

  loadMore = async () => {
    const { lastPage, refreshing } = this.state;

    if (!refreshing && !lastPage) {
      this.setState({ refreshing: true });

      const { page } = this.state;

      const nextPage = page + 1;

      this.load(nextPage);
    }
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading && <ActivityIndicator color="#666" />}

        <Stars
          onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
          onEndReached={this.loadMore} // Função que carrega mais itens
          onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
          refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
          // Restante das props
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred onPress={() => this.handleNavigate(item)}>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />

        {refreshing && <ActivityIndicator color="#666" />}
      </Container>
    );
  }
}

User.propTypes = {
  navigation: propTypes.shape({
    getParam: propTypes.func,
    navigate: propTypes.func,
  }).isRequired,
};
