import React from 'react';
import { connect } from 'react-redux';

const Video = ({activeLesson, activeModule}) => (
    <div>
        <strong>Módulo {activeLesson.title}</strong><hr/>
        <span>Aula {activeModule.title}</span>
      </div>
);

export default connect(state => ({
    activeLesson: state.sidebarReducer.activeLesson,
    activeModule: state.sidebarReducer.activeModule
}))(Video);
