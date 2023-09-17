import { Footer } from "antd/lib/layout/layout";
import commit from "../utils/commit.json"

function MyFooter() {
    return (
        <Footer
            style={{
                backgroundColor: "#001529",
                color: "#fff",
                padding: "10px 0px",
                textAlign: "center",
                width: "100%",
            }}
        >
            <a href="https://lpython.org/">LPython</a> (<a href={"https://github.com/lcompilers/lpython/commit/" + commit.id}>{commit.id}</a>) by &nbsp;
            <a href="https://lcompilers.org/">LCompilers</a> | &nbsp;
            <a href="https://github.com/lcompilers/online_lpython">Contribute</a> |&nbsp;
            <a href="https://github.com/lcompilers/online_lpython/issues">Report Issues</a>
        </Footer>
    );
}

export default MyFooter;
