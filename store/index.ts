export const kungalgameStoreReset = () => {
  usePersistEditGalgameStore().$reset()
  usePersistEditTopicStore().$reset()
  usePersistKUNGalgameReplyStore().$reset()
  usePersistKUNGalgameTopicStore().$reset()
  usePersistCategoryStore().$reset()
  usePersistKUNGalgameHomeStore().$reset()
  usePersistUserStore().$reset()
  usePersistMessageStore().$reset()
  usePersistSettingsStore().$reset()

  useTempEditStore().$reset()
  useTempGalgamePRStore().$reset()
  useTempGalgameStore().$reset()
  useTempGalgameResourceStore().$reset()
  useTempCommentStore().$reset()
  useTempReplyStore().$reset()
  useTempBalanceStore().$reset()
  useTempHomeStore().$reset()
  useTempMessageStore().$reset()
  useTempNonMoeStore().$reset()
  useTempPoolStore().$reset()
  useTempRankingStore().$reset()
  useTempSectionStore().$reset()
  useTempSettingStore().$reset()
  useTempTechniqueStore().$reset()
}
