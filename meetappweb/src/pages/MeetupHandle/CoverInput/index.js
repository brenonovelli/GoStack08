import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const meetup = useSelector(state => state.meetup.data);

  const { defaultValue, registerField } = useField('cover');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  const meetupUrlBanner = meetup && meetup.File.url;

  useEffect(() => {
    if (meetup) {
      setPreview(meetupUrlBanner);
    }
  }, [meetup, meetupUrlBanner]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="cover">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <span>
            <MdCameraAlt size={36} />
            <strong>Selecionar imagem</strong>
          </span>
        )}
        <input
          type="file"
          id="cover"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
