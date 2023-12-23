"use client";

import { Player, PlayerProps } from '@/components/player/player'
import Search from '@/components/search/search'
import { useState } from 'react';

export default function Home() {
  const [audios, setAudios] = useState<PlayerProps[] | null>();
  const [allAudios] = useState<PlayerProps[] | null>([
    {
      source: '',
      title: 'titulo',
    },
    {
      source: '',
      title: 'titulao',
    },
    {
      source: '',
      title: 'tiatulo',
    },
    {
      source: '',
      title: 'titaaaulo',
    },
    {
      source: '',
      title: 'tiddtulo',
    },
    {
      source: '',
      title: 'mitulo',
    },


  ]);

  const filter = async (term: string) => {
    if (term) {
      if (allAudios) {
        await setAudios(allAudios.filter(audio => audio.title.includes(term)));
      }
    }
    else {
      await setAudios(allAudios);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-48">
      <Search onSearch={filter} />
      {audios && audios.map(audio => <Player source={audio.source} title={audio.title} type={audio.type} />)}
    </main>
  )
}
