import React, { useState } from 'react'
import styled from 'styled-components';
import './App.css'

function App() {
  // 创建一个 Title 组件,它将渲染一个附加了样式的 <h1> 标签
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #cccccc;
`

// 创建一个 Wrapper 组件,它将渲染一个附加了样式的 <section> 标签
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

// 就像使用常规 React 组件一样使用 Title 和 Wrapper 
return (
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
}

export default App
