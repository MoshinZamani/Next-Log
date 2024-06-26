import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-sky-600 dark:border-sky-500 drop-shadow-xl shadow-sky rounded-full mx-auto mt-8"
        src="/images/me.jpg"
        width={200}
        height={200}
        alt="Mohsen"
        priority={true}
      />
    </section>
  );
}
