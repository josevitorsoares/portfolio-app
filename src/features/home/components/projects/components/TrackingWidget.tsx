import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Skeleton,
} from "@/shared/components/ui";
import { useTrackingQuery } from "@/shared/hooks";
import { cn } from "@/shared/lib";
import { packageSchema, type Package } from "@/shared/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar1Icon,
  Clock3Icon,
  Loader2Icon,
  MapPinIcon,
  NavigationIcon,
  PackageSearchIcon,
  SearchIcon,
  ShieldXIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TrackStatusIcon } from "./TrackingStatusIcon";
import type { TrackingStatus } from "./types";

function TracksSkeleton() {
  return (
    <div className="relative pl-4 ml-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-8 py-2 pt-6">
      <div className="relative animate-fadeIn">
        <Skeleton
          className={cn(
            "absolute -left-8 -top-1.5 w-7.5 h-7.5 rounded-full",
            "flex flex-row justify-center items-center",
            "bg-slate-200 dark:bg-slate-700",
          )}
        />
        <div className="flex flex-col ml-2">
          <Skeleton className="font-bold text-sm bg-slate-200 dark:bg-slate-700 h-4 w-70" />
          <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex flex-col gap-1">
              <Skeleton className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-700 h-4 w-20" />

              <Skeleton className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-700 h-4 w-20" />
            </div>
            <div className="flex flex-col justify-center gap-1 text-xs">
              <Skeleton className="flex flex-row gap-1 items-center bg-slate-200 dark:bg-slate-700 h-4 w-60" />

              <Skeleton className="flex flex-row gap-1 items-center bg-slate-200 dark:bg-slate-700 h-4 w-50" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative animate-fadeIn">
        <Skeleton
          className={cn(
            "absolute -left-8 -top-1.5 w-7.5 h-7.5 rounded-full",
            "flex flex-row justify-center items-center",
            "bg-slate-200 dark:bg-slate-700",
          )}
        />
        <div className="flex flex-col ml-2">
          <Skeleton className="font-bold text-sm bg-slate-200 dark:bg-slate-700 h-4 w-70" />
          <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex flex-col gap-1">
              <Skeleton className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-700 h-4 w-20" />

              <Skeleton className="flex flex-row gap-1 bg-slate-200 dark:bg-slate-700 h-4 w-20" />
            </div>
            <div className="flex flex-col justify-center gap-1 text-xs">
              <Skeleton className="flex flex-row gap-1 items-center bg-slate-200 dark:bg-slate-700 h-4 w-60" />

              <Skeleton className="flex flex-row gap-1 items-center bg-slate-200 dark:bg-slate-700 h-4 w-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrackingWidget() {
  const form = useForm<Package>({
    resolver: zodResolver(packageSchema),
    mode: "onChange",
    criteriaMode: "all",
    values: {
      trackingCode: "",
    },
  });
  const { handleSubmit, control } = form;

  const [trackingCode, setTrackingCode] = useState<Package | null>(null);

  const {
    data: trackingData,
    isFetching,
    error,
  } = useTrackingQuery(trackingCode);

  const onSubmit = (data: Package) => {
    if (!isFetching) {
      setTrackingCode(data);
    }
  };

  const LocationInfo = (location: { origin: string; destination?: string }) => {
    if (location.destination) {
      return (
        <div className="flex flex-col justify-center gap-2 text-xs">
          <span className="flex flex-row gap-1 items-start">
            <MapPinIcon size={12} className="shrink-0!" />
            de {location.origin}
          </span>

          <span className="flex flex-row gap-1 items-start">
            <NavigationIcon size={12} className="shrink-0!" />
            para {location.destination}
          </span>
        </div>
      );
    }

    return (
      <span className="flex flex-row justify-center gap-1">
        <MapPinIcon size={12} />
        {location.origin}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col h-full min-h-100 hover:shadow-xl transition-shadow duration-300 w-full max-w-md mx-auto">
      <div className="p-6 bg-linear-to-r from-blue-700 to-indigo-700 text-white">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
          <PackageSearchIcon size={24} /> Rastro Correios
        </h3>
        <p className="text-sm">Integração com API dos Correios</p>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <Form {...form}>
          <form
            role="search"
            onSubmit={handleSubmit(onSubmit)}
            className="mb-6 relative"
          >
            <FormField
              control={control}
              name="trackingCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Ex: AB123456789BR"
                        className="w-full h-12.5 pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all text-slate-800 dark:text-white uppercase font-mono tracking-wider"
                        {...field}
                      />
                      <Button
                        type="submit"
                        disabled={isFetching}
                        className="absolute right-2 top-2 p-1.5! [&>svg]:size-auto! bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50"
                      >
                        {isFetching ? (
                          <Loader2Icon size={20} className="animate-spin" />
                        ) : (
                          <SearchIcon size={20} />
                        )}
                      </Button>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className="flex-1 overflow-y-auto max-h-62.5 custom-scrollbar pr-2 custom-scrollbar">
          {isFetching && <TracksSkeleton />}

          {!trackingData && !isFetching && !error && (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center py-8">
              <TruckIcon size={48} className="mb-3 opacity-20" />
              <div className="text-sm flex flex-col">
                <span>Digite o código acima para</span>
                <span>acompanhar sua encomenda.</span>
              </div>
            </div>
          )}

          {error && (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center py-8">
              <ShieldXIcon size={48} className="mb-3 opacity-50" />
              <p className="text-sm">
                Ocorreu um erro ao tentar localizar esse objeto.
              </p>
              <p className="text-sm">Tente novamente mais tarde.</p>
            </div>
          )}

          {trackingData && !error && (
            <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-700 ml-4 space-y-8 py-2 pt-6">
              {trackingData.tracks.map((item, index) => (
                <div key={index} className="relative animate-fadeIn">
                  <div
                    className={cn(
                      "absolute -left-8 -top-1.5 w-7.5 h-7.5 rounded-full border-2 border-white dark:border-slate-800",
                      "flex flex-row justify-center items-center",
                      index === 0
                        ? "bg-blue-700"
                        : "bg-slate-300 dark:bg-slate-600",
                    )}
                  >
                    <TrackStatusIcon
                      status={item.status as TrackingStatus}
                      size={20}
                    />
                  </div>
                  <div className="flex flex-col ml-2">
                    <span
                      className={`font-bold text-sm ${index === 0 ? "text-slate-800 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}
                    >
                      {item.description}
                    </span>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex flex-row md:flex-col gap-3 md:gap-1">
                        <span className="flex flex-row gap-1">
                          <Calendar1Icon size={12} /> {item.date}
                        </span>
                        <span className="flex flex-row gap-1">
                          <Clock3Icon size={12} /> {item.time}
                        </span>
                      </div>
                      <LocationInfo
                        origin={item.origin}
                        destination={item.destination}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
