export default function({app, redirect, store}) {
    if(store.state.user.name != 'dfsdf')
        return redirect('/');
}