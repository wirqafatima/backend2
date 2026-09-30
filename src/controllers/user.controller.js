export const userController = async (req, res) => {
    try {
        res.status(200).send("Hello World")
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}


export const userLoginController = async (req, res) => {
    try {
        res.status(200).send("Login Page");

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}

export const userLogoutController = async (req, res) => {
    try {
        res.status(200).send("Logout Page");

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}