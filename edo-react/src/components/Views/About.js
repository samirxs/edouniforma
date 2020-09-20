import React from "react";
import Card from "../AboutCard";
import a1card from "../../img/acard.jpeg";
import b1card from "../../img/bcard.jpg";
import acard2 from "../../img/acard2.jpg";
import bcard2 from "../../img/bcard2.jpg";


function About() {
	return (
		<div className="container mx-auto">
			<section className="py-4 px-4 ">
				<div className="w-full mx-auto text-center">
					<h2 className="text-3xl lg:text-4xl mt-1 mb-2">Haqqımızda</h2>
				</div>
				<div className="bg-gray-200 rounded-lg p-4 max-w-4xl mx-auto shadow-lg ">
					Bizim kompaniya müxtəlif cür iş geyimlərinin(uniformalarının) topdan
					satışı ilə məşğuldur: korporativ geyimlər, iş geyimləri, iş əlcəkləri,
					iş ayaqqabıları, xüsusi qoruyucu vasitələr və s. Biz sizə istədiyiniz
					keyfiyyətdə məhsullarımızı təklif edirik. Bizdə geniş çeşidli
					məhsullar vardır ki, istənilən tədbir, təşkilat və müəssəni
					funksianallaşdıra bilər. <br/> <br/>	Bizim müştərilərimiz arasında həm hüquqi həm
					də fiziki şəxslər mövcuddur. Hər bir müştəriyə onun tələb və
					istəklərinə uyğun olaraq endirimlər təklif etməyə hazırıq. Müsabiqəli,
					daimi alıcı və sezon endirimləri mövcuddur.
				</div>
				<div>
					<Card acard={a1card} bcard={b1card} />
				</div>
				<div className="text-gray-700 body-font">
					<div className="px-5 mx-auto lg:pt-12	 ">
						<div className="text-center mb-10">
							<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
								Şəxsi Qoruyucu Vasitələr
							</h1>
							<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
								Şəxsi qoruyucu vasitələr işçilərin təhlükəsizliyini təmin etmək
								üçündür. ŞQV –nin əsas növləri bunlardır:
							</p>
						</div>
						<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Baş və üzqoruyucu vasitələr (dəbilqələr, kaskalar, kaska
										aksesuarları, maska)
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Əl qoruyucu vasitələri (iş əlcəkləri)
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Göz qoruyucu vasitələri (qoruyucu eynəklər)
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Nəfəs qoruyucu vasitələri
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Eşitmə qoruyucu vasitələri
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Yüksəklikdən düşmə qoruyucu vasitələri
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Fövqəladə-xilas avadanlıqları
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Card acard={acard2} bcard={bcard2} />
				<div className="text-gray-700 body-font">
					<div className="px-5 mx-auto lg:pt-12	 ">
						<div className="text-center mb-10">
							<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
								İş Ayaqqablıları
							</h1>
							<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
								Xüsusi iş ayaqqabılarının alt və ya uc hissələrində qoruyucu
								"dəmir" olur. XİA -nın əsas növləri bunlardır:
							</p>
						</div>
						<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Yay iş ayaqqabısı
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Qış iş ayaqqabısı
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Rezin iş ayaqqabısı
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-200 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Qadınlar üçün işçi ayaqqabısı
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
