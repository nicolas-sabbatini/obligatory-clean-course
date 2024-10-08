(() => {
  function getMovie(movieId: string) {
    console.log({ movieId });
  }

  function getMovieActors(movieId: string) {
    console.log({ movieId });
  }

  function getActorBio(ActorId: string) {
    console.log({ ActorId });
  }

  interface CreateMovieParameters {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({
    title,
    description,
    rating,
    cast,
  }: CreateMovieParameters) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) {
      return 1500;
    }
    if (isSeparated) {
      return 2500;
    }
    if (isRetired) {
      return 3000;
    }
    return 4000;
  };
})();
