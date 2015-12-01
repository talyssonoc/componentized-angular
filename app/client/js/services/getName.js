const getName = () => {
  return function getName() {
    // pretend that this is getting read from the database
    return 'developer';
  }
};

export default getName;
