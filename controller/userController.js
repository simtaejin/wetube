export const join = (req, res) => res.render("join" , { pageTitle: "Home" });
export const login = (req, res) => res.render("login" , { pageTitle: "login" });
export const logout = (req, res) => res.render("logout" , { pageTitle: "logout" });
export const userDetail = (req, res) => res.render("userDetail" , { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile" , { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword" , { pageTitle: "Change Password" });
