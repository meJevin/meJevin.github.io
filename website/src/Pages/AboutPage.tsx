import React, { useEffect, useState } from "react";

interface Props {
    easterEggMouseOver(): void;
    easterEggMouseLeave(): void;
}

const AboutPage: React.FC<Props> = (props) => {

    const [mainClass, setMainClass] = useState("");

    useEffect(() => {
        document.title = "About me";
    }, []);

    const handleEasterEggMouseOver = () => {
        setMainClass("hide");
        
        props.easterEggMouseOver();
    };

    const handleEasterEggMouseLeave = () => {
        setMainClass("");

        props.easterEggMouseLeave();
    };

    return (
        <main id="about" className={mainClass}>
            <h1 className="lg-heading">
            About <span className="text-secondary">Me</span>
            </h1>
    
            <h2 className="sm-heading">
            Gonna try to keep it short, but won't promise anything!
            </h2>
    
            <div className="about-info">
            <div className="bio-image"></div>
    
            <div className="bio">
                <h2 className="text-secondary">BIO & Job Experience</h2>
    
                <div className="bio-info">
                    <div className="bio-1">
                        <br />
                        My name is <span className="highlight">Michael</span> and I'm a young
                        software developer from <span className="highlight">Russia</span>.
                        <br /><br />
                        I'm only in the beginning of my programming carrier, but already
                        have a strong knowledge base of programming lanuages, frameworks,
                        APIs & general computer architecture on different levels; starting
                        from CPU registers and finishing with high-level software
                        abstractions.
                        <br /><br />
                    </div>
        
                    <div className="bio-2">
                        I've worked with <span className="highlight">C++ C#, Dart, HTML, CSS, JavaScript, TypeScript, C, Delphi</span>,
                        <br /><br />
                        Among the tools I've used are: <span className="highlight">Unity3D, .NET, Lazarus, SQL, WPF, WinForms, Visual Studio, Postman, WinAPI, XCode, SCSS, Xamarin Forms, ASP.NET, git</span>, and many-many more.
                        <br /><br />
                    </div>
        
                    <div className="bio-3">
                        I'm extremly enthusiastic to any kind of programming experience,
                        because I truly enjoy what I do. Whether it be a web-site, mobile
                        app, desktop app, a simple CLI tool or anything of that sort. That
                        is why I'm open to any offers you throw at me. And being a
                        dedicated, hard-working person that I am, I usually yield great
                        results. I always try to stay on the bleeding edge of the modern
                        programming world, learning new things, improving my knowledge in
                        areas that I already know.
                        <br /><br />
                    </div>
        
                    <div className="bio-4">
                        Outside of programming I'm your average&nbsp;
                        <span className="highlight-wow">white-haired elf-looking guy</span>.
                        Actually, that's&nbsp;
                        <span className="hover-for-bg" id="hover-for-bg-item" onMouseOver={handleEasterEggMouseOver} onMouseLeave={handleEasterEggMouseLeave}>me</span> in the
                        background. I really endore certain areas of&nbsp;
                        <span className="highlight">mathematics</span> &&nbsp;
                        <span className="highlight">physics</span>. <br/><br/> I enjoy editing videos adding varoious
                        special FX via <span className="highlight">Adobe After Effects</span> in my spare time.
                        I also play <span className="highlight">basketball</span> and <span className="highlight">skateboard</span> a lot and
                        I'm an amature <span className="highlight">photographer</span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
    
            <div className="job job-1">
                <h3>
                <a href="https://synteco.ru/" target="_blank">Synteco</a>
                <span>2018-Now</span>
                </h3>
                <h6>Software developer</h6>
                <p>
                Right now I'm a Software Developer at Synteco. Working with medical
                analyzers, I've delt with&nbsp;
                <span className="highlight">OpenCV</span> (<span className="highlight">EmguCV</span>&nbsp;
                on <span className="highlight">C#</span>) while developing my own&nbsp;
                <span className="highlight">computer vision</span> algorithms (and
                improving the old ones), <span className="highlight">MySQL</span>,&nbsp;
                <span className="highlight">SQLite</span>, Accord.Neuro to further
                improve my analyzing algorithms by throwing all the collected info
                about subjects into a <span className="highlight">nerual-net</span>,
                Accord.Video.DirectShow for interactions with&nbsp;
                <span className="highlight">video-cameras</span>,&nbsp;
                <span className="highlight">WPF</span> and a lot of other stuff!
                </p>
            </div>
            <div className="job job-2">
                <h3>
                <a href="https://code-className.ru/" target="_blank">Code Class</a>
                <span>2017-2018</span>
                </h3>
                <h6>Programming teacher</h6>
                <p>
                I've worked as a programming teacher for a little while. I was
                giving courses on <span className="highlight">C#</span> and&nbsp;
                <span className="highlight">Unity</span> to kids and teens from 10 years
                all the way up to 18 years old. I was the youngest teacher in the
                company at the time, but I was doing really well and taught a lot of
                people new things. Because I was so young my students really liked
                me and were really into the topics I taught. Would say that I
                acquired a lot of knowledge there related to programming. But if was
                a cool experience teaching people things that I love to play around
                with
                </p>
            </div>
            </div>
        </main>        
    )
};

export default AboutPage;