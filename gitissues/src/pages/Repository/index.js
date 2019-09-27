import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  LoadingInner,
  Owner,
  IssuesList,
  IssueFilter,
  PageActions,
} from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ repository: PropTypes.string }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    loadingInner: false,
    filters: [
      { state: 'all', label: 'Todas', active: true },
      { state: 'open', label: 'Abertas', active: false },
      { state: 'closed', label: 'Fechadas', active: false },
    ],
    filterIndex: 0,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filters } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    // const repository = await api.get(`repos/${repoName}`);
    // const issues = await api.get(`repos/${repoName}/issues`);
    // Vira:

    const [repository, issues] = await Promise.all([
      api.get(`repos/${repoName}`),
      api.get(`repos/${repoName}/issues`, {
        // Query params = url?state=open
        params: {
          state: filters.find(f => f.active).state,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const { filters, filterIndex, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterIndex].state,
        per_page: 5,
        page,
      },
    });

    this.setState({ loadingInner: false, issues: response.data });
  };

  handleFilterClick = async filterIndex => {
    await this.setState({ filterIndex, loadingInner: true });
    this.loadIssues();
  };

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
      loadingInner: true,
    });
    this.loadIssues();
  };

  render() {
    const {
      repository,
      issues,
      loading,
      loadingInner,
      filters,
      filterIndex,
      page,
    } = this.state;

    if (loading) {
      return (
        <Loading>
          <span>Carregando</span>
        </Loading>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueFilter active={filterIndex}>
          {filters.map((filter, index) => (
            <button
              type="button"
              key={filter.label}
              onClick={() => this.handleFilterClick(index)}
            >
              {filter.label}
            </button>
          ))}
        </IssueFilter>
        <IssuesList>
          {loadingInner && (
            <LoadingInner>
              <FaSpinner color="#230187" size={14} />
            </LoadingInner>
          )}
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue.title}
                  </a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>
        <PageActions>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
          >
            Anterior
          </button>
          <span>Página {page}</span>
          <button type="button" onClick={() => this.handlePage('next')}>
            Próxima
          </button>
        </PageActions>
      </Container>
    );
  }
}
