import storage from 'redux-persist/lib/storage'

export const articlePersistConfig = {
  key: 'article',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
}
