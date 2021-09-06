import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { ARRAY_OFFSET } from 'src/common/constants'
import { useAppSelector } from 'src/hooks'
import { loadMorePodcasts, loadPodcasts } from 'src/store/actions'
import { INITIAL_PAGE, SEARCH_TIMEOUT } from './common/constants'
import { PodcastList, SearchInput } from './components'
import styles from './styles'

const Search: React.FC = () => {
  const { podcasts, totalPagesCount, currentPageIdx } = useAppSelector(
    ({ search }) => ({
      podcasts: search.podcasts,
      totalPagesCount: search.totalPagesCount,
      currentPageIdx: search.currentPageIdx
    })
  )

  const dispatch = useDispatch()

  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebounce(search, SEARCH_TIMEOUT)

  const hasMorePodcasts = currentPageIdx < totalPagesCount - ARRAY_OFFSET

  const handleLoadMore = () => {
    if (hasMorePodcasts) {
      dispatch(
        loadMorePodcasts({
          search,
          page: currentPageIdx + ARRAY_OFFSET,
          genres: []
        })
      )
    }
  }

  useEffect(() => {
    dispatch(
      loadPodcasts({ search: debouncedSearch, page: INITIAL_PAGE, genres: [] })
    )
  }, [debouncedSearch])

  return (
    <View style={styles.container}>
      <SearchInput value={search} onChange={setSearch} />
      <View style={styles.line} />
      <PodcastList podcasts={podcasts} onLoadMore={handleLoadMore} />
    </View>
  )
}

export default Search
