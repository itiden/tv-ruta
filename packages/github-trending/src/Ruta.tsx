import * as React from 'react';
import axios from 'axios';
import { useAppState } from '@tvruta/app';
import styled from 'styled-components';
import { Title, Container } from '@tvruta/components';

interface RepositoryProps {
  id: string;
  name: string;
  forks_count: number;
  stargazers_count: number;
}

const Table = styled.table`
  width: 100%;
`;

const Tr = styled.tr`
  padding-bottom: 3px;
`;

const Th = styled.th`
  color: #222;
  font-size: 18px;
  text-align: left;
  font-weight: bold;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
`;

const Td = styled.td`
  color: #222;
  font-size: 18px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
`;

export function Ruta() {
  const [repositories, setRepositories] = React.useState<RepositoryProps[]>([]);

  React.useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const today = new Date();
        let dd: string | number = today.getDate();
        let mm: string | number = today.getMonth() + 1;

        if (dd < 10) {
          dd = `0${dd}`;
        }
        if (mm < 10) {
          mm = `0${mm}`;
        }
        const date = `${today.getFullYear()}-${mm}-${dd}`;

        const response = await axios.get(`https://api.github.com/search/repositories?sort=stars&order=desc&per_page=8&q=language:javascript&q=language:typescript&q=created:${date}`);
        setRepositories(response.data.items);
      }
      catch (e) {
        console.log({ e });
      }
    }

    window.setInterval(() => {
      fetchRepositories();
    }, 10 * 60 * 1000);
    fetchRepositories();
  }, []);

  return (
    <Container>
      <Title>Github Trending</Title>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Forks</Th>
            <Th>Stars</Th>
          </Tr>
        </thead>
        <tbody>
          {repositories.map(repository => (
            <Tr key={repository.id}>
              <Td>{repository.name}</Td>
              <Td>{repository.forks_count}</Td>
              <Td>{repository.stargazers_count}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
