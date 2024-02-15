"use client";

import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger2,
  SelectValue,
} from "@/components/ui/select";
import { FormatPercent } from "@/lib/format";
import { ArtifactMainStats, ArtifactTypes } from "@/lib/interface";
import { getArtifactMainStatById, getArtifactTypes } from "@/lib/supabase/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const mainStatsDefaultValues = [
  { typeId: "1", value: 101 },
  { typeId: "2", value: 201 },
  { typeId: "3", value: 203 },
  { typeId: "4", value: 1251 },
  { typeId: "5", value: 600 },
];

const formSchema = z.object({
  typeId: z.number(),
  setId: z.number(),
  mainStatId: z.number(),
  subOptions: z.array(z.object({ statId: z.number(), value: z.number() })),
});

const PostArtifactPage = ({
  params,
}: {
  params: { userId: string; typeId: string };
}) => {
  const mainStatId = mainStatsDefaultValues.find(
    (stat) => stat.typeId == params.typeId
  )?.value;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeId: Number(params.typeId),
      setId: 501,
      mainStatId,
      subOptions: [
        { statId: 600, value: 3.9 },
        { statId: 700, value: 7.8 },
      ],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const [types, setTypes] = useState<ArtifactTypes[] | null>(null);
  const [mainStats, setMainStats] = useState<ArtifactMainStats | null>(null);

  useEffect(() => {
    const fetchArtifactTypes = async () => {
      const { data, error } = await getArtifactTypes();
      if (error) throw error;
      setTypes(data as ArtifactTypes[]);
    };
    fetchArtifactTypes();
  }, []);

  useEffect(() => {
    const fetchArtifactMainStat = async (id: number) => {
      const { data, error } = await getArtifactMainStatById(id);
      if (error) throw error;
      setMainStats(data as ArtifactMainStats);
    };
    fetchArtifactMainStat(form.getValues("mainStatId"));
  }, [form.watch("mainStatId")]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-[350px]">
          <div className="bg-[#bd6833] p-0.5">
            <div className="border-2 border-[#9f5427] text-white">
              <div className="ml-2">名前</div>
            </div>
          </div>
          <div className="bg-gradient-to-tl from-[#e2ac53] to-[#6b5453]">
            <div className="flex items-center justify-between px-4 pt-1 text-white">
              <div className="flex flex-col">
                <FormField
                  control={form.control}
                  name="typeId"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value.toString()}
                      >
                        <FormControl>
                          <SelectTrigger2 className="text-sm">
                            <SelectValue />
                          </SelectTrigger2>
                        </FormControl>
                        <SelectContent>
                          {types?.map((type) => (
                            <SelectItem
                              value={type.id.toString()}
                              key={type.id}
                            >
                              {type.japanese}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <div>
                  <FormField
                    control={form.control}
                    name="mainStatId"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value.toString()}
                        >
                          <FormControl>
                            <SelectTrigger2 className="text-sm">
                              <SelectValue />
                            </SelectTrigger2>
                          </FormControl>
                          <SelectContent>
                            {params.typeId == "1" && (
                              <SelectItem value="101">HP</SelectItem>
                            )}
                            {params.typeId == "2" && (
                              <SelectItem value="201">攻撃力</SelectItem>
                            )}
                            {(params.typeId == "3" ||
                              params.typeId == "4" ||
                              params.typeId == "5") && (
                              <>
                                <SelectItem value="103">HP</SelectItem>
                                <SelectItem value="203">攻撃力</SelectItem>
                                <SelectItem value="303">防御力</SelectItem>
                                <SelectItem value="400">元素熟知</SelectItem>
                              </>
                            )}
                            {params.typeId == "3" && (
                              <SelectItem value="500">
                                元素チャージ効率
                              </SelectItem>
                            )}
                            {params.typeId == "4" && (
                              <>
                                <SelectItem value="1251">
                                  火元素ダメージ
                                </SelectItem>
                                <SelectItem value="1252">
                                  水元素ダメージ
                                </SelectItem>
                                <SelectItem value="1253">
                                  氷元素ダメージ
                                </SelectItem>
                                <SelectItem value="1254">
                                  雷元素ダメージ
                                </SelectItem>
                                <SelectItem value="1255">
                                  風元素ダメージ
                                </SelectItem>
                                <SelectItem value="1256">
                                  岩元素ダメージ
                                </SelectItem>
                                <SelectItem value="1257">
                                  草元素ダメージ
                                </SelectItem>
                                <SelectItem value="1258">
                                  物理ダメージ
                                </SelectItem>
                              </>
                            )}
                            {params.typeId == "5" && (
                              <>
                                <SelectItem value="600">会心率</SelectItem>
                                <SelectItem value="700">
                                  会心ダメージ
                                </SelectItem>
                                <SelectItem value="800">
                                  与える治療効果
                                </SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <div className="text-2xl">
                    {mainStats?.star5! < 1
                      ? FormatPercent(mainStats?.star5!)
                      : mainStats?.star5}
                  </div>
                  <div className="flex">
                    <StarFilledIcon color="#fecc32" />
                    <StarFilledIcon color="#fecc32" />
                    <StarFilledIcon color="#fecc32" />
                    <StarFilledIcon color="#fecc32" />
                    <StarFilledIcon color="#fecc32" />
                  </div>
                </div>
              </div>
              <div className="relative grid h-32 w-32 place-content-center">
                聖遺物アイコン
              </div>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-[#816c58] to-[#b79056]" />
          <div className="bg-[#ece5d7] px-4 py-2">
            <div className="flex justify-between">
              <Badge className="text-md">+20</Badge>
            </div>
            <ul className="mx-2 mt-2 list-inside list-disc font-semibold text-[#545963]">
              <li>サブオプション１</li>
              <li>サブオプション２</li>
              <li>サブオプション３</li>
              <li>サブオプション４</li>
            </ul>
            <div className="text-[#64af5d]">セット効果名</div>
            <ul className="list-inside list-disc">
              <li className="text-[#727781]">２セット効果</li>
              <li className="text-[#727781]">４セット効果</li>
            </ul>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PostArtifactPage;
