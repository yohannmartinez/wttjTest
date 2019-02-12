import React from 'react';
import axios from 'axios';
import wttjLogo from '../images/wttjLogo.svg'
import logoEntreprise from '../images/logo_entreprise.png'


class widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 3,
            rows: 2,
            navigation_left: 0,
            blocs: [
                { type: "image", link: "https://cdn.welcometothejungle.co/uploads/image/file/7206/151601/small_wttj-offres-emploi_170aa579-aa26-4cf8-838c-9d68d4da6c32.jpg" },
                { type: "image", link: "https://cdn.welcometothejungle.co/uploads/image/file/7214/151601/small_wttj-annonces_d8d26d42-e764-4b3b-af34-2cdf25936ee1.jpg" },
                { type: "image", link: "https://cdn.welcometothejungle.co/uploads/image/file/7217/151601/small_wttj-jobs_2d663949-83f4-486c-be79-b7d199de4216.jpg" },
                { type: "image", link: "https://cdn.welcometothejungle.co/uploads/image/file/7229/151601/small_wttj-jobs_5dd0c775-397f-4462-911b-6e43b37effe7.jpg" },
                { type: "image", link: "https://cdn.welcometothejungle.co/uploads/image/file/7240/151601/small_wttj-jobs_a1aa5500-1287-47f8-8fda-efc32a627451.jpg" },
                { type: "image", link: "https://cdn.welcometothejungle.co/uploads/image/file/7252/151601/small_wttj-jobs_b3bbd3a7-0c09-403a-a446-9f29d0b09c3f.jpg" },
            ],
        }
    }

    async componentDidMount() {
        let progressBarWidth = Math.abs(-100 - ((Math.abs(this.state.navigation_left - 1) - (Math.ceil(this.state.blocs.length / (this.state.columns * this.state.rows)))) / (Math.ceil(this.state.blocs.length / (this.state.columns * this.state.rows))) * 100));
        document.getElementsByClassName('progress_bar')[0].style.width = `${progressBarWidth}%`
    }

    navigate(navigation_number) {
        this.setState({ navigation_left: this.state.navigation_left + navigation_number }, () => {
            document.getElementsByClassName('navigation_container')[0].style.transform = `translateX(${this.state.navigation_left}00vw)`
            console.log(Math.abs(this.state.navigation_left))
            let progressBarWidth = Math.abs(-100 - ((Math.abs(this.state.navigation_left - 1) - (Math.ceil(this.state.blocs.length / (this.state.columns * this.state.rows)))) / (Math.ceil(this.state.blocs.length / (this.state.columns * this.state.rows))) * 100));
            document.getElementsByClassName('progress_bar')[0].style.width = `${progressBarWidth}%`
        })
    }


    render() {
        return (
            <div>
                <div className="navbar">
                    <img src={logoEntreprise} className="logo_header" />
                    <span className="nom_entreprise_header">Yohann Martinez</span>
                    <div className="navigation_buttons_container_right">
                        <button className="navigation_button" disabled={Math.abs(this.state.navigation_left) <= 0} onClick={() => { this.navigate(1) }}><i class="fas fa-chevron-left"></i></button>
                        <button className="navigation_button" disabled={Math.abs(this.state.navigation_left) > (Math.ceil(this.state.blocs.length / (this.state.columns * this.state.rows)) - 2)} onClick={() => { this.navigate(-1) }}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>

                <div className="blocs_container">
                    <div className="navigation_container" style={{ "width": `${Math.ceil(this.state.blocs.length / (this.state.columns * this.state.rows))}00vw` }}>
                        {this.state.blocs.map((bloc, index) => (
                            <div className="bloc" style={{ "order": (index + 1), "width": `calc(100vw / ${this.state.columns})`, "height": `calc(100% / ${this.state.rows})` }}>
                                {bloc.type === "image" &&
                                    <div className="bloc_image" style={{ "backgroundImage": `url("${bloc.link}")` }}>
                                        <div className="bloc_image_search"><i class="fas fa-search"></i></div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>

                <div className="progress_bar_container">
                    <div className="progress_bar"></div>
                </div>

                <div className="footer">
                    <img src={wttjLogo} className="wttj_logo_footer" />
                    <button className="see_profile_button">VOIR LE PROFIL <i class="fas fa-angle-right"></i></button>
                </div>
            </div>
        )
    }
}

export default widget;
