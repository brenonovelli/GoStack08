import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
    errorMsg: '',
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      if (newRepo === '') {
        this.setState({
          error: true,
          errorMsg: 'Você precisa indicar um repositório',
        });
        throw new Error('Você precisa indicar um repositório');
      }

      const hasRepo = repositories.find(r => r.name === newRepo);

      if (hasRepo) {
        this.setState({
          error: true,
          errorMsg: 'Repositório duplicado',
        });
        throw new Error('Repositório duplicado');
      }

      this.setState({
        errorMsg: 'Repositório não encontrado. Tente novamente.',
      });

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleRemove = e => {
    this.setState({ loading: true });

    const { repositories } = this.state;
    const index = repositories.findIndex(el => el.name === e);
    repositories.splice(index, 1);

    this.setState({ loading: false });
  };

  render() {
    const { newRepo, repositories, loading, error, errorMsg } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
          {error && <span>{errorMsg}</span>}
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <div>
                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                  Detalhes
                </Link>
                <button
                  type="button"
                  onClick={() => this.handleRemove(repository.name)}
                >
                  Apagar
                </button>
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
