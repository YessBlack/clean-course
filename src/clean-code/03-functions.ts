(() => {

  function getMovieById( id: string ) {
      console.log({ id });
  }

  function getMovieCastById( id: string ) {
      console.log({ id });
  }

  function getActorBioById( id: string ) {
      console.log({ id });
  }
  
  interface Movie {
      cast: string[] 
      description: string, 
      rating: number, 
      title: string, 
  }

  function createMovie(movie: Movie) {
      const { title, description, rating, cast } = movie;
      console.log({ title, description, rating, cast });
  }

  function checkFullName( fullName: string ): boolean {
      return fullName === 'fernando';
  }

  function createActor( fullName: string, birthdate: Date ): boolean {
      
      checkFullName(fullName);

      console.log('Crear actor ');
      console.log({ fullName, birthdate });
      return true;
  }

  enum EmployeeStatus {
      DECEASED = 'EMPLOYEE_DECEASED',
      SEPARATED = 'EMPLOYEE_SEPARATED',
      RETIRED = 'EMPLOYEE_RETIRED',
      DEFAULT = 'DEFAULT',
  }

  const EMPLOYEE_PAY_RATES = {
      [EmployeeStatus.DECEASED]: 1500,
      [EmployeeStatus.SEPARATED]: 2500,
      [EmployeeStatus.RETIRED]: 3000,
      [EmployeeStatus.DEFAULT]: 4000,
  } as const;

  const getPayAmount = (status: EmployeeStatus): number => {
      return EMPLOYEE_PAY_RATES[status] || EMPLOYEE_PAY_RATES[EmployeeStatus.DEFAULT];
  };


})();
