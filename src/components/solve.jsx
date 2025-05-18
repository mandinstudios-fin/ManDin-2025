import React, { useState } from 'react'
import '../styles/solve.css'
import { Plus } from 'lucide-react';

const Solve = () => {

    return (
        <section className="">
            <h2 className='heading-title'>Our Niche</h2>
            <div className='section-background'>

                <div className='heading'>
                    <h2>Solve your largest security headaches</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, qui natus minus ad neque recusandae voluptatum quis similique atque sapiente veritatis reprehenderit aspernatur tempore illo molestias! Dignissimos incidunt ipsum eius veritatis laboriosam ratione aliquam, id animi, explicabo sit excepturi vitae ullam perspiciatis! Eum qui dolore soluta beatae amet. Nihil, aliquam? Dicta praesentium vel beatae quia amet illum et labore magni, accusamus similique hic aliquam neque reiciendis nemo maxime perspiciatis, veniam quos corporis distinctio, facilis maiores? Hic, tempora libero dolores similique fuga rerum aut, ut voluptatibus eos commodi perspiciatis velit vero dolorum sit sunt quas officia tempore nihil autem fugiat culpa!</p>
                </div>

                <div className='grid-cards'>
                    <div className='grid'>
                        <Plus />
                        <h2>Heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt eos voluptatem voluptatibus, temporibus doloremque non nisi fuga libero modi quasi itaque quam qui? Reiciendis praesentium quam cupiditate repellendus deserunt soluta!</p>
                    </div>

                    <div className='grid'>
                        <Plus />
                        <h2>Heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt eos voluptatem voluptatibus, temporibus doloremque non nisi fuga libero modi quasi itaque quam qui? Reiciendis praesentium quam cupiditate repellendus deserunt soluta!</p>
                    </div>
                    <div className='grid'>
                        <Plus />
                        <h2>Heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt eos voluptatem voluptatibus, temporibus doloremque non nisi fuga libero modi quasi itaque quam qui? Reiciendis praesentium quam cupiditate repellendus deserunt soluta!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solve