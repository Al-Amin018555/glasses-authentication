import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    return (
        <div>
            <div className="divider m-2"></div>
            <button onClick={() => googleSignIn()} className="btn btn-outline btn-primary">Google</button>
        </div>
    );
};

export default SocialLogin;