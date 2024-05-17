import React from 'react'

const Vertex = () => {
  return (
    <>
      <h4 className=' text-center text-white mt-5 '>Leverage the use of AI</h4>
      <div className='flex flex-row justify-center gap-3 items-center mb-0 border p-0 flex-wrap'>
        <div className='flex flex-col justify-center items-center '>
          <h5 className=' text-center text-white mt-4'>Veretx AI chat Application</h5>
          <p className=' text-center text-white mt-4'>(Communication and Colabaration with Vertex Ai application)</p>
          <img src="vertex.png" alt="" height={100} width={500} />
          <a href="https://chat-flask-cloudrun-tldmlcu3ba-uc.a.run.app/" target='_blank'>visit</a>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <h5 className=' text-center text-white mt-4'>Veretx AI Summarizer</h5>
          <p className=' text-center text-white mt-4'>(Experience Effortless Summarization with VertexAI Summarizer)</p>
          <img src="vertex2.png" alt="" height={100} width={500} />
          <a href="https://vertex-summarizer-inpvsxp3rq-el.a.run.app" target='_blank'>visit</a>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-3 items-center mb-5 border p-0 flex-wrap'>
        <div className='flex flex-col justify-center items-center '>
          <h5 className=' text-center text-white mt-4'>Generative Video Analytics</h5>
          <p className=' text-center text-white mt-4'>Empower Decision Making with Generative video Analytics</p>
          <img src="generative.png" alt="" height={100} width={500} />
          <a href="https://cf9cb8e4b5c2ed1de9.gradio.live/" target='_blank'>visit</a>
        </div>
      </div>
    </>

  )
}

export default Vertex
