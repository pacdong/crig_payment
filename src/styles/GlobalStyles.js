import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
    }
    body {
        font-size: 16px;
        background-color : #EDF0F5;
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        text-decoration:none;
    }
    /* input:focus{ */
        outline:none;
    }
`;
