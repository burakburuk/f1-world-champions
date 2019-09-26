import styled from 'styled-components';
import Button from '../Button';

const StyledYear = styled.div`
height: 100%;
text-align: center;
background: #bfbfbf;
color: white;
padding-top: 16px;
margin-right:5px;
padding-left: 4px;
padding-right: 4px;
border-right: 5px solid red;
`;

const StyledTeam = styled.div`
color: gray;
text-align: center;
padding-top: 2px;
padding-right: 10px;
`;

const StyledCompany = styled.div`
float: left;
padding: 5px;
`;

const StyledImage = styled.img`
width: 93px;
text-align: center;
padding-top: 0;
float: right;
`;

const StyledButton = styled(Button)`
width: 100%;
`;

export {
    StyledYear,
    StyledTeam,
    StyledCompany,
    StyledImage,
    StyledButton,
};
