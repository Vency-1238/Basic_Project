import React from 'react'

function Card(props) {
  return (
    <div>
      
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img class="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1716881139357-ddcb2f52940c?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512" />
    <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        <h1>{props.user}</h1>
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
