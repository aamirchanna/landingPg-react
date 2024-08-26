function Features({features}) {
    return(
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium underline-offset-4 underline  title-font text-gray-900 mb-4">
              Features
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {features.map((data) => (
              <div key={data.id} className="hover:bg-orange-400  p-4 md:w-1/3 w-full">
                <div className="h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                    {data.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      {data.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {data.description}
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default Features