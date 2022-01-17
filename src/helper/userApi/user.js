export const signUpUser = (body) => {
    return new Promise((resolve, reject) => {
        ApiCall("user/register", "post", body)
            .then((signUpUser) => {
                //  Dispatch Action to update the user
                // store.dispatch(updateUserDispatch(signUpUser.data.data));
                resolve();
            })
            .catch(reject);
    });
};