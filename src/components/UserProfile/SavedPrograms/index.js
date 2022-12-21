import React from 'react';
const posts = [
  {
    title: 'Career Development and Financial Security',
    name: 'Paul York',
    certification: 'Certified HIIT Coach @PaulYorkFitness',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
  },
  {
    title: 'Workplace Communicaiton and Profit Margins',
    name: 'Paul York',
    certification: 'Certified HIIT Coach @PaulYorkFitness',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
  },
  {
    title: 'Career Development and Financial Security',
    name: 'Paul York',
    certification: 'Certified HIIT Coach @PaulYorkFitness',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
  },
  {
    title: 'Workplace Communicaiton and Profit Margins',
    name: 'Paul York',
    certification: 'Certified HIIT Coach @PaulYorkFitness',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
  }
];

const UserSavedPrograms = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="font-medium text-lg pb-3">Programs</h1>
        <div className="grid gap-10 grid-cols-2">
          {posts.map((post) => (
            <div key={post.title} className="shadow-md">
              <div className="relative">
                <img className="max-h-[160px] w-full object-cover" src={post.imageUrl} alt="" />
                <img src="/images/badge.png" alt="" className="absolute top-[15px] right-[15px]" />
              </div>
           <div className='grid grid-cols-3 gap-4 items-center m-3'>
           <div className='flex items-center'>
             <span><img src='/images/dollar-circle-active.png' className='mx-3' alt='' width={14} /></span>
             <span ><img src='/images/book-icon.png' alt='' className='' width={14} /></span>
             </div>
             <div className='flex items-center'>
             <span><img src='/images/timer.png' alt='' className='mx-2' width={14} /></span>
             <span><p className='text-sm font-medium text-gray-500'>6 parts</p></span>
             </div>
             <div className='flex items-center'>
             <span><img src='/images/profile-2user.png' alt='' className='mx-2' width={14} /></span>
             <span><p  className='text-sm font-medium text-gray-500'>200 enrolled</p></span>
             </div>
           </div>
              <div className="px-5 ">
                <h1 className="text-gray-900 font-bold text-xl">{post.title}</h1>
                <div class="flex items-center py-5">
                  <img src="/images/feedback-1.png" alt="user-img" width={40} />
                  <div class="pl-5">
                    <div class="flex items-center">
                      <h1 class="text-sm leading-5 text-gray-900 font-medium">{post.name}</h1>
                    </div>
                    <p class="text-sm text-gray-500 leading-5 font-normal">{post.certification}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserSavedPrograms;
