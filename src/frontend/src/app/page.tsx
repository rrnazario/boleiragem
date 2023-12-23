import Player from '@/components/player/player'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-48">      
      <Player source='' title='Boleiragem'/>
      <Player source='' title='Boleiragem 2'/>
      <Player source='' title='Boleiragem 3'/>
    </main>
  )
}
