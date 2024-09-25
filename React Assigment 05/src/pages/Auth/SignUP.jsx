import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { TextField } from "@mui/material";
import { Button } from "antd";
import { Link } from "react-router-dom";


function SignUp() {
    return (
        <div className="bg-gray-100 pt-24">
        <div className="w-full h-full grid place-items-center gap-5">
            <div>
                <h1 className="font-bold text-4xl underline">Welcome!</h1>
            </div>
            <div className="flex flex-col gap-2">
                <TextField id="outlined-basic" label="Email Address" variant="outlined" type="email" className="w-72" />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" className="w-72" />
                <button className="font-semibold text-lg w-72 bg-green-500 text-white rounded-lg h-10">SignUp </button>
                <p className="flex justify-evenly font-bold"> Or Have An Account ?<Link to={'/Auth'} className="text-green-600">LogIn</Link> </p>
            </div>

            <div className="text-center font-bold">
                OR
                <br />
                __________________________________________
            </div>
            <div className="flex flex-col gap-2 p-5">
                <Button icon={<GoogleOutlined />} className="font-semibold text-lg w-72 h-10 bg-yellow-400">SignUp with Google</Button>
                <Button icon={<FacebookOutlined />} className="font-semibold text-lg w-72 h-10 bg-blue-600">SignUp with Facebook</Button>
                <Button icon={<GithubOutlined />} className="font-semibold text-lg w-72 bg-black h-10 text-white">SignUp with Github</Button>
            </div>
        </div>

        </div>
    )

   
}



export default SignUp;