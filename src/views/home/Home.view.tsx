import {getGenres} from '../../services/movieService';

interface HomeProps {
  chooseGenre: (genre: IGenre) => void;
}

const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    setGenres(getGenres());
  }, []);

  return (
    <ScrollContainer>
      <Header text="Movie Genres" />
      {genres.map(genre => {
        return (
          <Pressable onPress={() => props.chooseGenre(genre)}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};
