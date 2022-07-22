import React from 'react'
import Link from 'next/link'
import styles from "../../styles/MostSought.module.css"

export default function MostSought() {
    console.log(styles)
  return (
    <section className={`${styles.wrap_full} ${styles.sought_pashmina_wrap}`}>
		<div className={`${styles.box_container}`}>
			<div className={`${styles.sought_pashmina} ${styles.content_size}`}>
				<h2>
					<span className={`${styles.main_heading}`}>Most sought after Pashmina</span>
					<span className={`${styles.second_heading}`}>HERITAGE</span>
				</h2>
				<div className={`${styles.sought_pashmina_row}`}>
					<div className={`${styles.soughtpashmina_three} ${styles.soughtpashmina_col}`}>
						<img src="images/MostSought/All_Over.jpg" alt="All Over (Jaal)" className={`${styles.soughtpashmina_img}`} />
						<h3>All Over (Jaal)</h3>
						<p className={`${styles.hideOnMobile}`}>Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore.</p>
						<ul>
							<li><a href="javascript:void(0)">View All <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16} width={21}><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg></a></li>
							<li className={`${styles.hideOnMobile}`}><a href="javascript:void(0)">(88)</a></li>
						</ul>
					</div>
					<div className={`${styles.soughtpashmina_three} ${styles.soughtpashmina_col}`}>
						<img src="images/MostSought/Jamavaar.jpg" alt="Jamavaar" className={`${styles.soughtpashmina_img}`} />
						<h3>Jamavaar</h3>
						<p className={`${styles.hideOnMobile}`}>Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore.</p>
						<ul>
							<li><a href="javascript:void(0)">View All <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16} width={21}><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg></a></li>
							<li className={`${styles.hideOnMobile}`}><a href="javascript:void(0)">(88)</a></li>
						</ul>
					</div>
					<div className={`${styles.soughtpashmina_three} ${styles.soughtpashmina_col}`}>
						<img src="images/MostSought/Kalamkaari.jpg" alt="Kalamkaari" className={`${styles.soughtpashmina_img}`} />
						<h3>Kalamkaari</h3>
						<p className={`${styles.hideOnMobile}`}>Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore.</p>
						<ul>
							<li><a href="javascript:void(0)">View All <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16} width={21}><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg></a></li>
							<li className={`${styles.hideOnMobile}`}><a href="javascript:void(0)">(88)</a></li>
						</ul>
					</div>
					<div className={`${styles.soughtpashmina_three} ${styles.soughtpashmina_col}`}>
						<img src="images/MostSought/Zari_Tilla.jpg" alt="Zari / Tilla" className={`${styles.soughtpashmina_img}`} />
						<h3>Zari / Tilla</h3>
						<p className={`${styles.hideOnMobile}`}>Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore.</p>
						<ul>
							<li><a href="javascript:void(0)">View All <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16} width={21}><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg></a></li>
							<li className={`${styles.hideOnMobile}`}><a href="javascript:void(0)">(88)</a></li>
						</ul>
					</div>
					<div className={`${styles.soughtpashmina_three} ${styles.soughtpashmina_col}`}>
						{/* <a href="javascript:void(0)" className={`${styles.exclusive_link}`}><img src="images/exclusive.png" alt="img" className={`${styles.exclusive_img}`} /></a> */}
						<img src="images/MostSought/Do_Rukha.jpg" alt="Do-Rukha" className={`${styles.soughtpashmina_img}`} />
						<h3>Do-Rukha</h3>
						<p className={`${styles.hideOnMobile}`}>Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore.</p>
						<ul>
							<li><a href="javascript:void(0)">View All <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16} width={21}><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg></a></li>
							<li className={`${styles.hideOnMobile}`}><a href="javascript:void(0)">(88)</a></li>
						</ul>
					</div>
					<div className={`${styles.soughtpashmina_three} ${styles.soughtpashmina_col}`}>
						<img src="images/MostSought/Border_Palla.jpg" alt="Border (Palla)" className={`${styles.soughtpashmina_img}`} />
						<h3>Border (Palla)</h3>
						<p className={`${styles.hideOnMobile}`}>Sed ut perspiciatis unde omnis iste natus error sit volup tatem accus antium dolore.</p>
						<ul>
							<li><a href="javascript:void(0)">View All <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16} width={21}><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg></a></li>
							<li className={`${styles.hideOnMobile}`}><a href="javascript:void(0)">(88)</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
