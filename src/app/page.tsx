import Link from "next/link";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-4xl font-bold mb-4">Aligo Oligo</h1>
				<h2 className="text-2xl font-medium text-gray mb-12">
					공유하여 목표를 달성해보세요!
				</h2>
			</div>
			<p className="text-2xl font-medium text-gray mb-24">
				현재 187,054개의 티켓을 성취했어요!
			</p>

			<div className="flex flex-col items-center justify-center w-full ">
				<Link
					href="/signin"
					className="w-full h-full flex items-center justify-center"
				>
					<button className="w-9/12 h-20 bg-main rounded-md text-xl text-white mx-auto mb-12">
						로그인
					</button>
				</Link>

				<button className="text-xl text-main">
					<Link href="/signup">회원가입 하기</Link>
				</button>
			</div>
		</section>
	);
}
