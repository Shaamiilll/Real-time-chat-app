export const signup = async (req, res) => {
  try {
    
  } catch (error) {
    res.send(error);
  }
};

export const login = (req, res) => {
  res.send("login");
  console.log("login");
};

export const logout = (req, res) => {
  res.send("logout");
  console.log("logout");
};
