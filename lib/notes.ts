export interface NoteArticle {
  title: string
  url: string
  description: string
  tags: string[]
  date: string // YYYY-MM-DD
}

// ここに note の記事を追加していくだけで /notes ページに自動反映されます
export const noteArticles: NoteArticle[] = [
  // 例：
  // {
  //   title: '脳疲労とドライヘッドスパの関係｜姫路の専門店が解説',
  //   url: 'https://note.com/senzu_himeji/n/xxxxx',
  //   description: '現代人の脳疲労の原因と、ドライヘッドスパによるケアについて解説します。',
  //   tags: ['脳疲労', 'ドライヘッドスパ', '姫路'],
  //   date: '2025-03-15'
  // },
]
