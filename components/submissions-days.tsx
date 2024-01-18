'use client';

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import {TwitterIcon} from "@/components/icons";
import {Submission, submissions} from "@/config/submissions";
import { Avatar} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {useEffect, useState} from "react";
import {shuffleArray} from "@/utils/array";
import {useWindowSize} from "@/components/use-window-size";
import "react-image-gallery/styles/css/image-gallery.css";
import ScrollToTop from "@/components/scroll-top-top";

const renderVideoUrl = (video: any) => {
  return (
    <video controls muted className={'mb-12 mx-auto'}>
      <source src={video.original} />
    </video>
  )
}

export default function SubmissionsDays(day:any) {
  console.log(day.day)
  const isWideScreen = useWindowSize();
  let sortedSubmissions:Submission[] = []
  if(day.day ==1){
    sortedSubmissions=submissions.slice(0, 13)
  } else{
    sortedSubmissions=submissions.slice(-10)

  }
  return (
    <div className={'w-full'}>
      <div className="mt-8 w-full">
        {
          sortedSubmissions.map((s, idx) => (
            <Card key={idx} className={'border-gray-600 border-1 rounded my-8 md:my-16'}>
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar isBordered radius="full" size="md" color={'primary'} src={'/'}/>
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4
                      className="font-semibold leading-none text-default-600 mb-2 text-xl ">{'Vote N'+ (idx+1) +' : ' + (s.name || 'Untitled Submission') + ' by ' + s.authorGithub}</h4>
                  </div>
                  {
                    (s.authorTwitter && (
                      <Link
                        isExternal
                        className={buttonStyles({variant: "bordered", radius: "full"})}
                        href={'https://x.com/' + s.authorTwitter}
                      >
                        <TwitterIcon size={20}></TwitterIcon>
                      </Link>
                    ))
                  }
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <div key={idx}>
                  <div className={'mb-6'}>
                    <ScrollShadow className="max-h-[300px]">
                      <span className="text-default-600 whitespace-break-spaces">{s.description}</span>
                    </ScrollShadow>
                  </div>
                  <div className={''}>
                    <ImageGallery showFullscreenButton={isWideScreen} showBullets autoPlay={false} lazyLoad
                                  items={s.artPiecesUrl.map(u => ({
                                    original: u,
                                    ...(u.endsWith('.mp4') || u.endsWith('.mov') ? {
                                      // @ts-ignore
                                      renderItem: renderVideoUrl.bind(this)
                                    } : {})
                                  })) as any}/>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="gap-3">

              </CardFooter>
            </Card>
          ))
        }
      </div>
      <ScrollToTop/>
    </div>
  );
}
