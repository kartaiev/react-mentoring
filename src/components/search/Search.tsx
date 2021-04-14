import React, { FC, useEffect } from 'react';
import tw from 'twin.macro';
import { GLOBAL, SEARCH } from '../../lib';
import { ButtonDanger, SearchInput } from '../../elements';
import { useField } from '../../hooks';
import { searchMovies } from '../../state/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { DefaultState } from '../../state/interfaces/default';

const Search: FC = () => {
  const count = useSelector((state: DefaultState) => state.movies.data.data);
  const { push } = useHistory();
  const searchField = useField();
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    push(`${url}/search?title=${searchField.value}`);

    searchField.setValue('');
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    title && dispatch(searchMovies(title));
    // !count.length && push('/movies/notfound');
  }, [location]);

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <TitleInput>
        <SearchTitle>{SEARCH.TITLE}</SearchTitle>
        <SearchInput
          placeholder={SEARCH.PLACEHOLDER}
          searchField={searchField}
        />
      </TitleInput>
      <ButtonDanger btnName={GLOBAL.SEARCH} type="submit" />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = tw.form`w-full h-24 absolute top-1/3 left-0 flex justify-between z-30 px-32`;
const TitleInput = tw.div`w-4/5 h-40 flex flex-col justify-between items-start`;
const SearchTitle = tw.h1`text-6xl z-20 text-gray-50 font-logoAlt`;
