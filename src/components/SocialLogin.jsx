import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn, githubSignIn, twitterSignIn } = useAuth();
    return (
        <div>
            <div className="divider m-2"></div>
            <div className="flex justify-around">
                <button onClick={() => googleSignIn()} className="btn btn-outline btn-primary">Google</button>
                <button onClick={() => githubSignIn()} className="btn btn-outline btn-primary ml-2">GitHub</button>
                <button onClick={() => twitterSignIn()} className="btn btn-outline btn-primary ml-2">Twitter</button>

            </div>
        </div>
);
};

export default SocialLogin;