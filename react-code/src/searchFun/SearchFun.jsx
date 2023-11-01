import React, { useRef, useState } from "react";

const SearchFun = () => {
  const [input, setInput] = useState("");
  f;
  const para = useRef("");

  const handleSearch = () => {
    let paraText = para.current.innerHTML;
    let b = paraText.search("lor");
    console.log(b);
  };

  return (
    <div>
      <p ref={para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maxime
        facilis fuga sunt, adipisci saepe dolor possimus consequuntur minus
        illum velit impedit, eum distinctio ea beatae molestiae amet quod ipsum
        reprehenderit illo culpa pariatur corrupti. Ad facere sequi voluptates
        modi quos soluta nihil iste dicta ipsam excepturi animi doloremque at
        voluptatum quasi numquam odit, aliquid provident. Libero delectus esse
        rem dolorem sint perspiciatis facere, assumenda numquam quisquam
        doloribus laboriosam est enim minus incidunt necessitatibus nisi quod
        explicabo recusandae culpa praesentium nihil quos voluptatem odit?
        Accusantium aspernatur vero at consequatur, ex hic tenetur doloremque
        odit harum magni sunt, sequi nisi ad provident, architecto omnis totam
        neque. Voluptate omnis sunt obcaecati magni quis necessitatibus
        repellendus dolores quo quos. Voluptate inventore, sapiente velit quis
        qui architecto quaerat modi nihil saepe quam natus accusamus. Sit
        explicabo quo similique dolore accusamus sapiente unde voluptate aperiam
        eius ex voluptates amet corrupti, necessitatibus ducimus maxime
        architecto perspiciatis inventore quisquam ipsam. Dicta quod sequi quae
        nesciunt. Neque maiores reprehenderit cum nesciunt soluta repellendus
        labore ex non dignissimos nam eveniet aspernatur illum consectetur
        explicabo officiis praesentium eius possimus itaque tempore corrupti,
        illo laudantium quod. Aperiam ex nemo, reprehenderit non doloribus velit
        minus? Dolorem ex veniam pariatur, voluptas culpa minus adipisci, quos
        fugit esse cumque cupiditate omnis in sapiente debitis temporibus quia
        incidunt voluptatibus delectus consectetur itaque quod repudiandae
        reprehenderit? Nemo eius inventore commodi sequi dolor fuga consequuntur
        saepe ipsam autem! Vero laboriosam sequi odio labore! Eum voluptatem,
        iusto cupiditate sit repudiandae voluptates veniam, reprehenderit velit
        maiores nihil eos quae vitae dolor libero saepe. Iste enim, sequi qui
        temporibus deleniti repellendus officia, perferendis aliquid laboriosam
        est, eius commodi vel! Asperiores quod quos corporis nulla quibusdam rem
        magnam, pariatur eveniet aliquam est enim, eligendi in veniam officiis
        nam ipsa nisi perspiciatis beatae excepturi, amet commodi debitis? Et
        officiis voluptatibus sunt fugit.
      </p>
      <div className="d-flex gap-3 m-3">
        <input
          type="text"
          placeholder="search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleSearch}>
          search
        </button>
      </div>
    </div>
  );
};

export default SearchFun;
