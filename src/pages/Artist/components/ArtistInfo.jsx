
const ArtistInfo = ({record}) => {
    return( 
    <section className="p-4 text-sm">
      <h1 className="text-4xl mb-1 font-bold mt-2">{record}</h1>
      <p className="uppercase mb-4">Monthly listeners</p>
  
      <div>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, facere atque a, doloribus enim est perspiciatis aliquam earum rerum dolores eos suscipit corrupti assumenda adipisci, perferendis placeat ab iusto nihil.</p>
  
          <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, dicta? Sequi molestiae illo quibusdam aspernatur quae voluptatem, quas, dignissimos incidunt qui excepturi rerum, commodi officiis. Culpa rerum voluptates quo itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, possimus tenetur. Amet vel dolores fuga distinctio labore. Sit impedit voluptas aut doloribus dolorum, temporibus tempore sed voluptates adipisci doloremque reprehenderit.
          </p>
      </div>
    </section>
    );
  };
  
  export default ArtistInfo;