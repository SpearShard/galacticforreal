// 'use client'

// import { supabase } from '../lib/supabaseClient'
// import { useRouter } from 'next/navigation'

// export default function DashboardPage() {
//   const router = useRouter()

//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold">Dashboard 🚀</h1>

//         <button
//           onClick={async () => {
//             await supabase.auth.signOut()
//             router.replace('/auth')
//           }}
//           className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   )
// }













'use client'

import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard 🚀</h1>

        <button
          onClick={async () => {
            await supabase.auth.signOut({ scope: 'global' })
            router.replace('/auth')
          }}
          className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
