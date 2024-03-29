import React from 'react'
import { useRecoilState } from 'recoil'
import { allSongsState } from '../../atoms/player.atom'
import TrackItem from '@/src/components/TrackItem/TrackItem'
import Headerpage from '@/src/components/Headerpage/Headerpage'
const Albums = ({ searchResults }: { searchResults: any }) => {
  const [Songs, setSongs] = useRecoilState(allSongsState)
  return (
    <>
      <Headerpage subtitle={'Album'} />
      <ul className="allSongs">
        {searchResults
          ? searchResults.map((item, key) => {
              return <TrackItem item={item} key={key} cle={key}/>
            })
          : Songs.map((item, key) => {
              return <TrackItem item={item} key={key} cle={key}/>
            })}
      </ul>
    </>
  )
}

export default Albums
