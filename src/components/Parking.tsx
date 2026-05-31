import { storeData } from '../data/store'

export default function Parking() {
  return (
    <section id="parking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <p className="section-subtitle">PARKING</p>
        <h2 className="section-title">駐車場</h2>
        <div className="section-divider" />

        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-stone-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-stone-800 mb-1">専用駐車場なし</p>
              <p className="text-sm text-stone-500 leading-relaxed">
                {storeData.parking.note}
              </p>
            </div>
          </div>

          <div className="bg-warm-50 rounded-lg p-4 border border-stone-100">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-bold text-stone-700">近隣コインパーキング</p>
            </div>
            <p className="text-sm text-stone-500">
              徒歩圏内にコインパーキングが複数ございます。
              お気軽にスタッフへお声がけください。
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-stone-800 mb-1">公共交通機関でのアクセス</p>
              <p className="text-sm text-stone-500">
                アクセス情報は入力予定
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
