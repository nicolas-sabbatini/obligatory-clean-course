(() => {
  const temperaturesOnCelsius = [33.6, 12.34];

  const serverIp = "123.123.123.123";

  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const usersEmails = users.map((user) => user.email);

  // Variables booleanas de un video juego
  const canJump = false;
  const canRun = true;
  const hasItems = false;
  const isLoading = false;

  // Otros ejercicios
  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  const endTime = new Date().getTime() - startTime;

  // Funciones
  function getBook() {
    throw new Error("Function not implemented.");
  }

  function getBooksFromUrl(u: string) {
    throw new Error("Function not implemented.");
  }

  function getScuareArea(s: number) {
    throw new Error("Function not implemented.");
  }

  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
