import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

export const Loading = styled.ActivityIndicator`
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
export const Browser = styled(WebView)`
  flex: 1;
`;
