import {app} from "./app";
const port = 3010

app.listen(port, () => {
    console.log(`Server has started on http://localhost:${port}`)
})