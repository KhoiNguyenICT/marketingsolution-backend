import Startup from './Startup';

const port = process.env.PORT;

Startup.listen(port, err => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is running on port: ${port}`);
});
