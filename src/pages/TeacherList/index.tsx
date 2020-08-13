import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da Semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;